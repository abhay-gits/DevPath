import Question from "../models/question.model.js";

export const htmlQuestionHandler = async (req, res) => {
  const limit = 15;
  const page = parseInt(req.query.page) || 1;
  const skip = (page -1 ) * limit; 
  try {
    const htmlQuestions = await Question.find({ topic: "HTML" }).skip(skip).limit(limit);
    if (!htmlQuestions) {
      return res.status(404).json({ message: "No HTML questions found" });
    }
    res.json(htmlQuestions);
  } catch (error) {
    console.error("Error fetching HTML questions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const cssQuestionHandler = async (req, res) => {
  try {
    const cssQuestions = await Question.find({ topic: "CSS" });
    if (!cssQuestions) {
      return res.status(404).json({ message: "No CSS questions found" });
    }
    res.json(cssQuestions);
  } catch (error) {
    console.error("Error fetching CSS questions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const jsQuestionHandler = async (req, res) => {
  try {
    const jsQuestions = await Question.find({ topic: "JavaScript" });
    if (!jsQuestions) {
      return res.status(404).json({ message: "No JavaScript questions found" });
    }
    res.json(jsQuestions);
  } catch (error) {
    console.error("Error fetching JavaScript questions:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const reactQuestionHandler = async (req, res) => {
  try {
    const reactQuestions = await Question.find({ topic: "React" });
    if (!reactQuestions) {
      return res.status(404).json({ message: "No React questions found" });
    }
    res.json(reactQuestions);
  } catch (error) {
    console.error("Error fetching React questions:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
