// import './App.css'
import Button from './components/Button'
import Text from './components/Text'
function App() {

    const handleClick = (message) => {
      alert(message);
    };

  return (
    <div>
      <h1>Hello World</h1>
      <Button handleButtonClick={handleClick}>
        {/* Button component Self Closing Tag */}
        Click me on default button
      </Button>

      <Button color="red" paddingX="20px" paddingY="10px" handleButtonClick={handleClick}>
        {/* Button component Self Closing Tag */}
        Click me on red button
      </Button>

      <Button color="blue" handleButtonClick={handleClick}>
        {/* Button component Self Closing Tag */}
        <Text color="white">Click me on blue button</Text>
      </Button>

      <Button color="green" handleButtonClick={handleClick}>
        {/* Button component Self Closing Tag */}
        Click me on green button
      </Button>
    </div>
  );
}

export default App
