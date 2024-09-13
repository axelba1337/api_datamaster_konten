import { z } from "zod";

const kontenSchema = z.object({
    uuid: z.string().uuid(),
    title: z.string().min(1, "Title is required"),
    jenis_konten: z.enum(["0", "1"], {
        errorMap: () => ({ message: "jenis_konten must be either '0' for News or '1' for Advertisement" })
    }),
    meta_description: z.string().optional(),
    file: z.string().optional(),
    konten: z.string().optional(),
    url: z.string().optional(),
    creator: z.string().optional(),
    publish_date: z.string().optional(),
    status: z.boolean(),
}).superRefine((data, ctx) => {
    // Validasi konten: Wajib jika jenis_konten adalah News (0)
    if (data.jenis_konten === "0" && !data.konten) {
        ctx.addIssue({
            path: ["konten"],
            message: "Content is required for News type",
        });
    }

    // Validasi URL: Wajib jika jenis_konten adalah Advertisement (1)
    if (data.jenis_konten === "1" && (!data.url || !/^(https?:\/\/[^\s/$.?#].[^\s]*)$/i.test(data.url))) {
        ctx.addIssue({
            path: ["url"],
            message: "URL is required and must be valid for Advertisement type",
        });
    }
});

export default kontenSchema;