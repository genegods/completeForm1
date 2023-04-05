import React,{useState, useEffect} from 'react'

const FooterCopyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <React.Fragment>
    <main>
      <div>
        <div className="flex justify-center mt-10 border-t pt-4 md:items-center">
        <p>copyright © {year} gooddomicroprojects. All Rights Reserved</p>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default FooterCopyright