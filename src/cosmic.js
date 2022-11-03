import Cosmic from "cosmicjs";

const cosmic = Cosmic(import.meta.env.VITE_COSMICJS_TOKEN);
export const bucket = cosmic.bucket({
  slug: import.meta.env.VITE_COSMICJS_BUCKET_SLUG,
  read_key: import.meta.env.VITE_COSMICJS_BUCKET_READ_KEY,
  write_key: "",
});
