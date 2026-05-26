

interface Btn{
    title: string,
    bgClass?: string
}



function Button({title, bgClass}: Btn)
{
    return (
        <button className={`home-btn ${bgClass}`}>{title}</button>
    );
}



export default Button