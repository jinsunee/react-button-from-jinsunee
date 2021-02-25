# react-button-from-jinsunee

react + emotion + rollup ===> npm에 Button 라이브러리 배포해보기

![화면 기록 2021-02-25 오후 6 57 46](https://user-images.githubusercontent.com/31176502/109136682-b8dc1780-779b-11eb-95a7-32f274de434f.gif)

## Install

```
yarn add react-button-from-jinsunee

or

npm install react-button-from-jinsunee
```

## Props

| props   | type       |
| ------- | ---------- |
| text    | string     |
| onClick | () => void |

## Example

```
import './App.css';

import {Button} from 'react-button-from-jinsunee'

function App() {
  return (
    <div className="App">
      <div className="button">
        <Button text="Hi Febase :)" onClick={() => alert('버튼입니다')} />
      </div>
    </div>
  );
}

export default App;

```
