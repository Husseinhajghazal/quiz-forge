import { fail } from "@sveltejs/kit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// Temporary in-memory storage for files (use proper storage in production)
const fileStore = new Map();

/** @satisfies {import('./$types').Actions} */
export const actions = {
  uploadForm: async ({ request, cookies }) => {
    const formData = await request.formData();
    const files = formData.getAll("files");

    if (files[0].type === "application/octet-stream") {
      return fail(400, {
        title: "قم برفع ملف",
        message: "على الأقل قم برفع ملف واحد",
      });
    }

    // Generate or get existing session ID
    let sessionId = cookies.get("sessionId");
    if (!sessionId) {
      sessionId = uuidv4();
      cookies.set("sessionId", sessionId, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        maxAge: 60 * 60 * 24,
      });
    }

    // Store actual files in temporary storage
    fileStore.set(sessionId, files);

    return {
      title: "ملفات رائعة",
      message: "الآن قم بإنشاء مجموعات الأسئلة",
    };
  },

  createGroups: async ({ request, cookies }) => {
    const { groups } = Object.fromEntries(await request.formData());
    const groupsData = JSON.parse(groups);

    if (groupsData.length < 1) {
      return fail(400, {
        title: "قم بإنشاء مجموعة أسئلة",
        message: "على الأقل قم بإنشاء مجموعة أسئلة واحدة",
      });
    }

    cookies.set("groups", JSON.stringify(groupsData), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24,
    });

    return {
      title: "يبدو أن الأسئلة ستكون صعبة",
      message: "الآن قم بتعبئة المعلومات العامة إذا أردت",
    };
  },

  enterInfo: async ({ request, cookies }) => {
    const sessionId = cookies.get("sessionId");
    const groups = JSON.parse(cookies.get("groups") || "[]");
    const files = fileStore.get(sessionId);

    if (!files || files.length === 0) {
      return fail(400, {
        message: "الملفات غير موجودة، يرجى إعادة الرفع",
      });
    }

    const formData = new FormData();

    // Append actual files
    files.forEach((file) => {
      formData.append("files", file);
    });

    // Append groups
    groups.forEach((group, index) => {
      formData.append(`questionGroups[${index}][type]`, group.type);
      formData.append(`questionGroups[${index}][count]`, group.count);
      if (group.type === "MULTIPLE_CHOICES") {
        formData.append(
          `questionGroups[${index}][choicesCount]`,
          group.choicesCount
        );
      }
    });

    formData.append("lang", "english");

    try {
      const response = await axios.post(
        "https://hakathoon-ramadan-1.onrender.com/exam",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Cleanup stored files
      fileStore.delete(sessionId);

      console.log(response);

      return {
        title: "جيد الآن دع الباقي علينا",
        message: "قم الأن بحل الأسئلة عن طريق الموقع او بتنزيلها كملف",
        res: response.data,
      };
    } catch (error) {
      console.log(error);
      return fail(500, {
        message:
          "حصلت مشكلة أثناء معالجة الملفات: " +
          (error.response?.data?.message || "خطأ غير معروف"),
      });
    }
  },
};
