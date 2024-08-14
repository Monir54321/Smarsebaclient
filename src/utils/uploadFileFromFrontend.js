export const uploadFile = async (file, fieldName) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "digital-smart-sheba");
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dpglin62r/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      const imageUrl = data.secure_url;
      return {
        imageUrl,
        error: null,
        success: true,
        fieldName,
      };
    }
  } catch (error) {
    console.log("upload error", error);
    return {
      imageUrl: null,
      error: "Failed to upload file",
      success: false,
      fieldName,
    };
  }
};
