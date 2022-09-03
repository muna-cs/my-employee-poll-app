import { _saveQuestion , _saveQuestionAnswer } from "../utils/_DATA";

  describe("_saveQuestion", () => {
    
    it('it will return true when save question successfully', async () => {
     const question={
      optionOneText:"op1",
     optionTwoText:"op2",
     author:"tylermcginnis"}
      const result = await _saveQuestion(question);
      expect(result).toBeTruthy();

    });
  
    it("it will return error if did not save question ", async () => {
      const question={author:"tylermcginnis"}
      await expect(_saveQuestion(question)).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );

    });
  });

  describe("_saveQuestionAnswer", () => {
    it("it will return true if save answer successfully", async () => {
      const answer={
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne"
      }
      await expect(_saveQuestionAnswer(answer)).resolves.toBe(true);
    });
  

    it("it will return error if did not save answer", async () => {
        const answer={
          authedUser: 'sarahedo',
          answer: "option1"
          }

        await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
          "Please provide authedUser, qid, and answer" 
        );
      });

  });
