const talkToBackend = async (message)=>{
    try {
        const res = await fetch("http://localhost:5000/api/chat", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({message})
        });

        if (!res.ok){
            throw new Error(`Server responded with ${res.status}`);
        }

        const data = await res.json();
        return data.reply;
        
    } catch (error) {
        console.error("Error sending message to backend", error);
        throw error;
    }
}

export default talkToBackend;