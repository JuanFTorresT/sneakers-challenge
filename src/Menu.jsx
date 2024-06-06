export default function NavigationMenu() {
  return(
    <>
      <div className='flex gap-4 '>
        <a  className='uppercase' href="">sneakers</a>
        <ul className='flex gap-4 flex-wrap'>
          <li><a href="">Collections</a></li>
          <li><a href="">Men</a></li>
          <li><a href="">Women</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </>
  );
}