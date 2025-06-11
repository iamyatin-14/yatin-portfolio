import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

/**
 * Submit contact form data to Firebase Firestore
 * @param {Object} formData - The form data containing name, email, and message
 * @returns {Promise<Object>} - Success status and message
 */
export const submitContactForm = async (formData) => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "Name, email, and message are required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "Please provide a valid email address",
      };
    }

    // Add document to Firestore
    const docRef = await addDoc(collection(db, "contactMessages"), {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: serverTimestamp(),
      status: "new", // For future status tracking
    });

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
      messageId: docRef.id,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};
