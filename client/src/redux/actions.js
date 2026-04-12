export const fetchMessage = () => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:5000/api");
        const data = await response.json();
        dispatch({ type: "SET_MESSAGE", payload: data.message });
    } catch (error) {
        console.error("Error fetching message:", error);
    }
};
