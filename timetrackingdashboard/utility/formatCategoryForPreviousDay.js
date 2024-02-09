const formatCategoryForPreviousDay = (category) => {
    if (category === "daily") {
      return "Yesterday"
    } else if (category === "weekly") {
      return "Last Week"
    } else {
      return "Last Month"
    }
}

export default formatCategoryForPreviousDay;