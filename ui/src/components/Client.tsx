interface ClienteProps {
  name: string,
  age?: number,
}

export default function Cliente(props: ClienteProps) {
  return (
    <div>
      <div>Nome: {props.name ?? ''}</div>
      <div>Idade: {props.age ?? ''}</div>
    </div>
  )
}