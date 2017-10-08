module MyButton = {
    let component= (ReasonReact.statelessComponent "myButton");
    
    let make= (fun name::(name: string) children => {
        ...component,
        render: fun _self =>
        ReasonReact.createDomElement "button" props::{"value": name } children
      });
};

let buttonElement = MyButton.make name::"Okay" [|(<div> </div>)|];

/* This wouldn' typecheck:
Error: This expression has type
         ReasonReact.componentSpec
ReasonReact.stateless ReasonReact.stateless ReasonReact.noRetainedProps
 ReasonReact.noRetainedProps ReasonReact.actionless
       but an expression was expected of type ReasonReact.reactElement
*/
let element = <div> buttonElement </div>;
