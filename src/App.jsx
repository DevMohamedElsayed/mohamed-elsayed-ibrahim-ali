import { First } from "./New ";

export const App = () => {
  const firsts = [
    { title: "ONE", body: "this is the first section" },
    { title: "TWO", body: "this is the secound section" },
    { title: "THREE", body: "this is the third section " },
    { title: "FOUR", body: "this is forth section " },
    { title: "FIVE", body: "this is forth section" },
   
  ];
  return (
    <div>
      <h1>todo</h1>

    

      {firsts.map((p) => (
        <First title={p.title} body={p.body} />
      ))}

    </div>
  );
};
