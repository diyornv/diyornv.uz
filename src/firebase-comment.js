import { db, collection, addDoc, getDocs } from "./firebase"; // Firebase konfiguratsiyasidan import

// Komment qo'shish funksiyasi
async function addComment(username, commentText) {
  try {
    const commentsCollection = collection(db, "portfolio-comments"); // Komment kolleksiyasini tanlash
    await addDoc(commentsCollection, {
      username: username,
      comment: commentText,
      createdAt: new Date(), // Sana va vaqt
    });
    console.log("Comment successfully added!");
  } catch (error) {
    console.error("Error adding comment: ", error);
  }
}

// Kommentlarni yuklash funksiyasi
async function loadComments() {
  try {
    const commentsCollection = collection(db, "portfolio-comments"); // Komment kolleksiyasini tanlash
    const commentSnapshot = await getDocs(commentsCollection); // Kommentlarni yuklash

    const commentsSection = document.getElementById("commentsSection"); // Kommentlar uchun bo'sh joy
    commentsSection.innerHTML = "<h2>Comments</h2>"; // Kommentlarni tozalash va sarlavha

    // Hujjatlarni aylantirib, har bir kommentni ko'rsatish
    commentSnapshot.forEach((doc) => {
      const commentData = doc.data();
      const commentElement = document.createElement("div");

      // HTML formatida har bir kommentni yaratish
      commentElement.innerHTML = `
                <p><strong>${commentData.username}:</strong> ${
        commentData.comment
      }</p>
                <small>${new Date(
                  commentData.createdAt.seconds * 1000
                ).toLocaleString()}</small>
            `;
      commentsSection.appendChild(commentElement); // Kommentni sahifaga qo'shish
    });
  } catch (error) {
    console.error("Error loading comments: ", error);
  }
}

export { addComment, loadComments };
