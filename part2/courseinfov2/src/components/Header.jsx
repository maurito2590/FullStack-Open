 import Content from "./Content";

const Header = ({title}) => {
  
  return (
    <div>
      {title.map((item) => (
        < Content key={item.id} title={item.name} assign={item.parts} />
      ))}
    </div>
  )

}

export default Header