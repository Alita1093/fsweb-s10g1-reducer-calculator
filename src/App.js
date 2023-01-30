import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const initialState = { total: 0, operation: "+", memory: 0 };
  const reducer = (state, action) => {
    if (action.type === "M+") {
      return {
        ...state,
        memory: state.total,
      };
    }
    if (action.type === "MR") {
      return {
        ...state,
        total: state.memory,
      };
    }
    if (action.type === "MC") {
      return {
        ...state,
        memory: 0,
      };
    }

    if (action.type === "sifirla") {
      return {
        ...state,
        total: 0,
        operation: "+",
        memory: 0,
      };
    }
    if (action.type === "ARTI") {
      return {
        ...state,
        operation: "+",
      };
    }
    if (action.type === "ARTI1") {
      return {
        ...state,
        operation: "+",
        total: state.total + 1,
      };
    }
    if (action.type === "ARTI2") {
      return {
        ...state,
        operation: "+",
        total: state.total + 2,
      };
    }
    if (action.type === "ARTI3") {
      return {
        ...state,
        operation: "+",
        total: state.total + 3,
      };
    }
    if (action.type === "ARTI4") {
      return {
        ...state,
        operation: "+",
        total: state.total + 4,
      };
    }
    if (action.type === "ARTI5") {
      return {
        ...state,
        operation: "+",
        total: state.total + 5,
      };
    }
    if (action.type === "ARTI6") {
      return {
        ...state,
        operation: "+",
        total: state.total + 6,
      };
    }
    if (action.type === "ARTI7") {
      return {
        ...state,
        operation: "+",
        total: state.total + 2,
      };
    }
    if (action.type === "ARTI8") {
      return {
        ...state,
        operation: "+",
        total: state.total + 8,
      };
    }
    if (action.type === "ARTI9") {
      return {
        ...state,
        operation: "+",
        total: state.total + 9,
      };
    }
    if (action.type === "eksi") {
      return {
        ...state,
        operation: "-",
      };
    }
    if (action.type === "eksi1") {
      return {
        ...state,
        operation: "-",
        total: state.total - 1,
      };
    }
    if (action.type === "eksi2") {
      return {
        ...state,
        operation: "-",
        total: state.total - 2,
      };
    }
    if (action.type === "eksi3") {
      return {
        ...state,
        operation: "-",
        total: state.total - 3,
      };
    }
    if (action.type === "eksi4") {
      return {
        ...state,
        operation: "-",
        total: state.total - 4,
      };
    }
    if (action.type === "eksi5") {
      return {
        ...state,
        operation: "-",
        total: state.total - 5,
      };
    }
    if (action.type === "eksi6") {
      return {
        ...state,
        operation: "-",
        total: state.total - 6,
      };
    }
    if (action.type === "eksi7") {
      return {
        ...state,
        operation: "-",
        total: state.total - 2,
      };
    }
    if (action.type === "eksi8") {
      return {
        ...state,
        operation: "-",
        total: state.total - 8,
      };
    }
    if (action.type === "eksi9") {
      return {
        ...state,
        operation: "-",
        total: state.total - 9,
      };
    }
    if (action.type === "carp") {
      return {
        ...state,
        operation: "*",
      };
    }
    if (action.type === "carp1") {
      return {
        ...state,
        operation: "*",
        total: state.total * 1,
      };
    }
    if (action.type === "carp2") {
      return {
        ...state,
        operation: "*",
        total: state.total * 2,
      };
    }
    if (action.type === "carp3") {
      return {
        ...state,
        operation: "*",
        total: state.total * 3,
      };
    }
    if (action.type === "carp4") {
      return {
        ...state,
        operation: "*",
        total: state.total * 4,
      };
    }
    if (action.type === "carp5") {
      return {
        ...state,
        operation: "*",
        total: state.total * 5,
      };
    }
    if (action.type === "carp6") {
      return {
        ...state,
        operation: "*",
        total: state.total * 6,
      };
    }
    if (action.type === "carp7") {
      return {
        ...state,
        operation: "*",
        total: state.total * 2,
      };
    }
    if (action.type === "carp8") {
      return {
        ...state,
        operation: "*",
        total: state.total * 8,
      };
    }
    if (action.type === "carp9") {
      return {
        ...state,
        operation: "*",
        total: state.total * 9,
      };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {
                  dispatch({ type: "M+" });
                }}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  dispatch({ type: "MR" });
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  dispatch({ type: "MC" });
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI1" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi1" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp1" });
                  }
                }}
              />
              <CalcButton
                value={2}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI2" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi2" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp2" });
                  }
                }}
              />
              <CalcButton
                value={3}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI3" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi3" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp3" });
                  }
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI4" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi4" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp4" });
                  }
                }}
              />
              <CalcButton
                value={5}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI5" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi5" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp5" });
                  }
                }}
              />
              <CalcButton
                value={6}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI6" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi6" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp6" });
                  }
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI7" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi7" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp7" });
                  }
                }}
              />
              <CalcButton
                value={8}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI8" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi8" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp8" });
                  }
                }}
              />
              <CalcButton
                value={9}
                onClick={() => {
                  if (state.operation === "+") {
                    dispatch({ type: "ARTI9" });
                  }
                  if (state.operation === "-") {
                    dispatch({ type: "eksi9" });
                  }
                  if (state.operation === "*") {
                    dispatch({ type: "carp9" });
                  }
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: "ARTI" })}
                value={"+"}
              />
              <CalcButton
                onClick={() => dispatch({ type: "carp" })}
                value={"*"}
              />
              <CalcButton
                onClick={() => dispatch({ type: "eksi" })}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: "sifirla" })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
