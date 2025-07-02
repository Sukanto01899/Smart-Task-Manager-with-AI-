export const handleSuggestSubtasks = async (title: string) => {
    try {
      const res = await fetch(`/api/suggest-subtasks`, {
        method: "POST",
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      if(data.status === 500){
        throw new Error(data.message)
      }

      return data.subtasks;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    } 
  };