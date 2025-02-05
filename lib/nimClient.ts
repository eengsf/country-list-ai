export const fetchAIResponse = async (query: string) => {
    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }
  
      return response.json();
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return null;
    }
  };
  

