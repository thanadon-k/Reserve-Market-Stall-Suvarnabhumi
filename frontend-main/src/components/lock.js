import React, { useState, useEffect } from "react";
import "../styles/lock.css";

function PositionLock(props) {
  const [lockKeys, setLockKeys] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]); 
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetchKeysFromDatabase();
  }, [props.value]);

  useEffect(() => {
    props.stall(selectedIndices); // Call stall callback when selectedIndices changes
  }, [selectedIndices, props.stall]);

  const fetchKeysFromDatabase = () => {
    setSelectedIndices([]); 
    fetch(`http://localhost:5000/market/${props.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
        'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const filteredLockKeys = data.map(item => {
        return {
          num: item.num,
          status: item.status
        };
      });
      
      setLockKeys(filteredLockKeys);
      setFetchError(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setFetchError(true);
    });
  };

  const handleLockClick = (num) => {
    const clickedItem = lockKeys.find(item => item.num === num);
    if (clickedItem.status !== 1) {
      const updatedSelectedIndices = [...selectedIndices];
      const selectedIndex = updatedSelectedIndices.indexOf(num);
      if (selectedIndex !== -1) {
        updatedSelectedIndices.splice(selectedIndex, 1);
      } else {
        updatedSelectedIndices.push(num);
      }
      setSelectedIndices(updatedSelectedIndices);
    }
  };
  

  return (
    <div className="component_lock">
      {fetchError ? ( 
        <div className="error-message">ไม่มีรายการที่ท่านเลือก</div>
      ) : (
        lockKeys.map((item, index) => (
          <div className={`lock_select ${item.status === 1 ? 'status_1' : 'status_0'} ${selectedIndices.includes(item.num) ? 'red-background' : ''}`} key={index} onClick={() => handleLockClick(item.num)}>
            {item.status === 1 && <div className="div_lock"></div>}
            <h3>{item.num}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default PositionLock;
