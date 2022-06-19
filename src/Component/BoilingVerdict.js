export default function BoilingVerdict ({celsius=0}) {
    if(celsius >= 100){
        return <p> Water would be boil </p>
    }
    {
        return <p> Water would not be boil </p>
    }
}