const mapper = {
  titleToClient: (json) => {
    return {
      title: json.Picabu_Title,
    }
  }
}

export default mapper;