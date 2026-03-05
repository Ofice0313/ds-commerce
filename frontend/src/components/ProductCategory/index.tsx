import './styles.css'

type Props = {
    name: string;
}

export default function ButtonInverse({ name }: Props) {
    return (
        <div className="dsc-category">
            <span>{name}</span>
        </div>
    );
}