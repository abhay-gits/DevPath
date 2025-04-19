import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: function () {
            return this.category === "MCQ";
        }
    },
})

const Question = mongoose.model("Question", questionSchema);
export default Question;