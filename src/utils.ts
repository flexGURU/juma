const scrollTo = (id: string) => {
    console.log("ssss");
    
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export { scrollTo };
