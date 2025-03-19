import { fail } from "@sveltejs/kit";

/** @satisfies {import('./$types').Actions} */
export const actions = {
  uploadForm: async ({ request, cookies }) => {
    const formData = await request.formData();
    const files = formData.getAll("files");

    if (files[0].type === "application/octet-stream") {
      return fail(404, {
        title: "قم برفع ملف",
        message: "على الأقل قم برفع ملف واحد",
      });
    }

    // Serialize files data as JSON and set it in a cookie
    cookies.set("files", JSON.stringify(files), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true, // Set to true in production
      maxAge: 60 * 60 * 24, // 1 day
    });

    return {
      title: "ملفات رائعة",
      message: "الآن قم بإنشاء مجموعات الأسئلة",
    };
  },
  createGroups: async ({ request, cookies }) => {
    const { groups } = Object.fromEntries(await request.formData());
    const groupsData = JSON.parse(groups);

    if (groupsData.length < 1) {
      return fail(404, {
        title: "قم بإنشاء مجموعة أسئلة",
        message: "على الأقل قم بإنشاء مجموعة أسئلة واحدة",
      });
    }

    // Serialize groups data as JSON and set it in a cookie
    cookies.set("groups", JSON.stringify(groupsData), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true, // Set to true in production
      maxAge: 60 * 60 * 24, // 1 day
    });

    return {
      title: "يبدو أن الأسئلة ستكون صعبة",
      message: "الآن قم بتعبئة المعلومات العامة إذا أردت",
    };
  },
  enterInfo: async ({ request, cookies }) => {
    // Retrieve groups and files from cookies
    const groups = JSON.parse(cookies.get("groups") || "[]");
    const files = JSON.parse(cookies.get("files") || "[]");

    // Process the groups and files as needed

    return {
      title: "جيد الآن دع الباقي علينا",
      message:
        "سيتم الآن إنشاء ملفات الأسئلة والأجوبة عن طريق الذكاء الاصطناعي",
    };
  },
};
