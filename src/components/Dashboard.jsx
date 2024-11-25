import React from 'react';

function Dashboard() {
  return (
    <div style={styles.dashboard}>
      <h1>환영합니다! 🎉</h1>
      <p>로그인에 성공했습니다.</p>
    </div>
  );
}

const styles = {
  dashboard: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default Dashboard;
