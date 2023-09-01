export default {
  adapter: {
    kava: {
      fetch: async (timestamp) => {
        // Call the 'jw' function to fetch the uint256 value
        const jwValue = await jw();

        return {
          timestamp,
          jwValue, // Include the jwValue in the response
        };
      },
    },
    optimism: {
      // Add support for other chains or networks as needed
    },
  },
};
