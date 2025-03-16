import { fail } from "@sveltejs/kit";

/** @satisfies {import('./$types').Actions} */
export const actions = {
  uploadForm: async ({ request }) => {
    const { files } = Object.fromEntries(await request.formData());

    const filesData = JSON.parse(files);

    if (filesData.length < 1) {
      console.log(1);
      return fail(404, {
        title: "قم برفع ملف",
        message: "على الأقل قم برفع ملف واحد",
      });
    }

    return {
      title: "ملفات رائعة",
      message: "الأن قم بأنشاء مجموعات الأسالة",
    };
  },
  createGroups: async ({ request }) => {
    const { groups } = Object.fromEntries(await request.formData());

    const groupsData = JSON.parse(groups);

    if (groupsData.length < 1) {
      return fail(404, {
        title: "قم بأنشاء مجموعة أسالة",
        message: "على الأقل قم بأنشاء مجموعة أسألة واحدة",
      });
    }

    return {
      title: "يبدو أنه الأسألة ستكون صعبة",
      message: "الأن قم بتعبئت المعلومات العامة اذا أردت",
    };
  },
  enterInfo: async (event) => {
    const {} = Object.fromEntries(await request.formData());

    return {
      title: "جيد الأن دع الباقي علينا",
      message:
        "سيتم الأن أنشاء ملفات الأسالة والأجوبة عن طريق الذكاء الأصطناعي",
    };
  },
};
