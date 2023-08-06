function showFeedbackForm(rating) {
  var feedbackForm = document.getElementById("feedback-form");
  feedbackForm.style.display = "block";
  document.getElementById("feedback-text").value = "";
  document.getElementById("name").value = ""; // Clear name box
  document.getElementById("email").value = ""; // Clear email box
  document.getElementById("phone").value = ""; // Clear phone number box
  document.getElementById("submit-btn").setAttribute("data-rating", rating);
  // Scroll to the feedback form when clicking on the rating options
  feedbackForm.scrollIntoView({ behavior: "smooth" });
}

function submitFeedback() {
  var feedback = document.getElementById("feedback-text").value;
  var rating = document.getElementById("submit-btn").getAttribute("data-rating");

  // Here, you can implement your logic to send the data to the server-side (Google Apps Script).
  // For this example, let's just display an alert with the feedback and rating.
  alert("Thank you for your feedback!\nRating: " + rating + "\nFeedback: " + feedback);

  // After submitting the feedback, hide the form again.
  document.getElementById("feedback-form").style.display = "none";

  // Prepare the data to be sent to the server-side (Google Apps Script)
  var formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    feedback: feedback,
    rating: rating,
  };

  // Send the data to the server-side (Google Apps Script)
  fetch("https://script.google.com/macros/s/AKfycbwsdrYX9ZttBf3z3BFgiNraM-cn1VlC31m19pJcPCZ4UMBn0opHvHA5JOO5I9154mmt/exec", {
    method: "POST",
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        // If the submission was successful, display a success message.
        alert("Feedback submitted successfully!");
      } else {
        // If there was an error, display an error message.
        alert("Error submitting feedback.");
      }
    })
    .catch((error) => {
      alert("Error submitting feedback: " + error);
    });
}
