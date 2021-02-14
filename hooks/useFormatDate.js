const useFormatDate = (PostDate) => {
    console.log("custom hook:", PostDate);

    const myDate = new Date(PostDate);

    const formatedDate = new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }).format(myDate);

    console.log("custom hook Format:", formatedDate);
    
    return formatedDate;
}

export default useFormatDate;