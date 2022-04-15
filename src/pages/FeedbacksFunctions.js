import db from '../db';

const handleSubmitFeed = async ({ name, comment }) => {
  await db.Feedbacks.addFeedback({ name, comment });
};
const handleUpdateFeed = async ({ id, name, comment }) => {
  await db.Feedbacks.updateFeedback({ id, name, comment });
};
const handleGetAll = async () => {
 const feeds= await db.Feedbacks.getFeedbacks();
 return feeds
};
const handleGetAllTests = async (name) => {
    const feeds= await db.Feedbacks.getTestingComments(name);
    return feeds
    
  };
const handleDelete = (id) => {
  db.Feedbacks.deleteFeedback(id);
};

export { handleSubmitFeed, handleUpdateFeed, handleGetAll , handleDelete, handleGetAllTests};
