const MobileOS = (props) => {
    const data = [
      {
        heading: "Mobile Operating System",
        items: ["Android", "Black Berry", "iPhone", "Windose Phone"],
      },
      {
        heading: "Mobile Manufecturing",
        items: ["Android", "Black Berry", "iPhone", "Windose Phone"],
        style: ["square", "square", "disk", "disk"],
      },
    ];
  
    return (
      <>
        <div>
          {data.map((e) => {
            return (
              <>
                <h1>{e.heading}</h1>
                {e.items.map((e) => {
                  return (
                    <div>
                      <ul>
                        <li>{e}</li>
                      </ul>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </>
    );
  };
  
  export default MobileOS;