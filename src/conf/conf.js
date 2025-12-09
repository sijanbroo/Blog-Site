const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  emailJsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  emailJsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  emailJsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
};

export default conf;
