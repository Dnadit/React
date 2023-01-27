
const MyDiv2 = () => {
  const myName = '강유현' ;
  const myGit = 'https://github.com/Dnadit'
  console.log(myName);
  return (
    <div>
        <p>{myName}</p>
        <p>GitHub : <a href={myGit}>{myGit}</a></p>
    </div>
  );
}

export default MyDiv2;
