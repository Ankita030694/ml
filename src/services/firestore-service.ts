const FirestoreService = {
    getAll: async (collection: string) => {
        console.log(`Fetching all from ${collection}`);
        // Mock data for outlets
        if (collection === "Constraints") {
            return [
                {
                    id: "1",
                    outlet: "Masala Library, Sector 33 Gurgaon",
                    timeSlots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"]
                }
            ];
        }
        return [];
    },
    add: async (collection: string, data: any) => {
        console.log(`Adding to ${collection}:`, data);
        return { id: "mock-id" };
    }
};

export default FirestoreService;
