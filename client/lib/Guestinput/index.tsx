import React, { useState, useEffect, useRef, FC } from "react";
import { FloatMenu } from "../FloatMenu";
import {
  WrapperInput,
  WrapperCounter,
  CounterButton,
  Title,
  CounterInfo,
  CounterButtons,
  TitleCounter,
} from "./styles";

interface IGuetsProps {
  state: { adults: number; kids: number; pets: number };
  setstate: (a: any) => void;
}

export const InputGuests: FC<IGuetsProps> = ({ state, setstate }) => {
  const [display, setdisplay] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = ref;
    if (wrap && !wrap.contains(event.target)) {
      setdisplay(false);
    }
  };

  const setStateGuests = (key, operator) => {
    switch (key) {
      case "adults":
        if (operator === "+") {
          setstate((prev) => ({ ...prev, adults: prev.adults + 1 }));
        } else {
          setstate((prev) => ({ ...prev, adults: prev.adults - 1 }));
        }
        break;
      case "kids":
        if (operator === "+") {
          if (state.adults === 0) {
            setstate((prev) => ({ ...prev, adults: 1, kids: 1 }));
          } else {
            setstate((prev) => ({ ...prev, kids: prev.kids + 1 }));
          }
        } else {
          if (state.kids - 1 === 0) {
            setstate((prev) => ({ ...prev, adults: 0, kids: 0 }));
          } else {
            setstate((prev) => ({ ...prev, kids: prev.kids - 1 }));
          }
        }
        break;
      case "pets":
        if (operator === "+") {
          if (state.adults === 0) {
            setstate((prev) => ({ ...prev, adults: 1, pets: 1 }));
          } else {
            setstate((prev) => ({ ...prev, pets: prev.pets + 1 }));
          }
        } else {
          if (state.pets - 1 === 0) {
            setstate((prev) => ({ ...prev, adults: 0, pets: 0 }));
          } else {
            setstate((prev) => ({ ...prev, pets: prev.pets - 1 }));
          }
        }
        break;
    }
  };

  const Guests = [
    {
      key: "adults",
      state: state.adults,
      setState: setStateGuests,
      name: "Adultos",
      disabled_sub: state.adults === 0,
    },
    {
      key: "kids",
      state: state.kids,
      setState: setStateGuests,
      name: "Niños",
      disabled_sub: state.kids === 0,
    },
    {
      key: "pets",
      state: state.pets,
      setState: setStateGuests,
      name: "Mascotas",
      disabled_sub: state.pets === 0,
    },
  ];

  return (
    <>
      <WrapperInput
        ref={ref}
        onClick={() => {
          setdisplay(true);
        }}
      >
        <Title>Huespedes</Title>

        {display && (
          <FloatMenu>
            <div>
              {Guests.map((v, i) => (
                <WrapperCounter key={i}>
                  <CounterInfo>
                    <TitleCounter>{v.name} </TitleCounter>
                    <TitleCounter>{v.state}</TitleCounter>
                  </CounterInfo>

                  <CounterButtons>
                    <CounterButton
                      type="button"
                      disabled={v.disabled_sub}
                      onClick={() => v.setState(v.key, "-")}
                    >
                      -
                    </CounterButton>
                    <CounterButton
                      type="button"
                      onClick={() => v.setState(v.key, "+")}
                      plus
                    >
                      +
                    </CounterButton>
                  </CounterButtons>
                </WrapperCounter>
              ))}
            </div>
          </FloatMenu>
        )}
      </WrapperInput>
    </>
  );
};
