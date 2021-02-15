const useFormatDate = (PostDate) => {
  
    const myDate = new Date(PostDate);

    const formatedDate = new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(myDate);
    
    return { formatedDate }
}

export default useFormatDate;