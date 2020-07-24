import React from "react";
import { useStateValue } from "./state";
import Button from "@material-ui/core/Button";

export const ThemedButton = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <Button
      style={{ background: theme.primary }}
      onClick={() =>
        dispatch({
          type: "changeTheme",
          newTheme: { primary: "blue" }
        })
      }
    >
      Make me blue!
    </Button>
  );
};

// Class based below
// import React, { Component } from 'react';
// import { StateContext } from './state';
// class ThemedButton extends Component {
//   static contextType = StateContext;
//   render() {
//     const [{ theme }, dispatch] = this.context;
//     return (
//       <Button
//         primaryColor={theme.primary}
//         onClick={() => dispatch({
//           type: 'changeTheme',
//           newTheme: { primary: 'blue'}
//         })}
//       >
//         Make me blue!
//       </Button>
//     );
//   }
// }
