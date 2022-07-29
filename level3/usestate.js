// 1. Pass in a new color of your choosing in place of the old one. 
    
//     Hint: we don’t care what the previous color was.

const [color, setColor] = useState("pink")

setColor("blue")

// Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.

// const [color, setColor] = useState("pink")

// function colorToggle(){
//     setColor(function(oldValue){
//         if(oldValue === "blue"){
//             setColor("pink")
//         } else {
//             setColor("blue")
//         }
//     })
// }

// Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople([
    {
        firstName: "John",
            lastName: "Smith"
    },
    {
        firstName: "Keanu",
            lastName: "Reaves"
    }
])

// 4. Change the following state-setting functions to use an implicit return
//     a.

const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => prevColors + "green")

    // b.

    const [countObject, setCountObject] = setState({
        count: 0
    })
    
    setCountObject(prevState=> prevState + 1)

    // Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.

    const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Smith"
})

setPerson(ummAge => ummAge + {age:"30"})