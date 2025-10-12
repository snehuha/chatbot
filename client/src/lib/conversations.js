const api_base = "http://localhost:5000/api";

export const getConversations = async (userId)=>{
    try {
        const res = await fetch(`${api_base}/conversations/${userId}`);

        if(!res.ok){
            throw new Error(`Server error: ${res.status}`)
        }

        return await res.json();

    } catch (error) {
        console.error("Cant fetch conversations", error);
        return [];
    }
};

export const createConversations = async (userId, title)=>{
    try {
        const res = await fetch(`${api_base}/conversations`, {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({userId, title})
        })

        if(!res.ok){
            throw new Error(`Server error: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error creating new conversation", error);
        return null;
    }
};