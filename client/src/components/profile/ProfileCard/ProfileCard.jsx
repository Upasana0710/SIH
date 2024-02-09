import React from 'react';
// import "./ProfileCard.css";
import styles from './ProfileCard.module.css';

let teachSub = ['DSA', 'SE', 'DAA', 'DBMS', 'OOPS'];
let studySub = ['BEE', 'AEC', 'AFL', 'AI', 'PDC'];

function ProfileCard({ user }) {
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.user_text}>
          <h3 className={styles.user_name}>{user.name}</h3>
          <h6 className={styles.user_email}>{user.email}</h6>
          <h5 className={styles.user_branch}>{user.branch}</h5>
          <p className={styles.user_bio}>
            Fueled by a passion for Learning,
            <br />
            I&apos;m an Engineering student{' '}
          </p>
        </div>

        <div className={styles.skills_container}>
          <div className={styles.skills}>
            <h3 className={styles.heading}>My Skills</h3>
            <ul className={styles.courses}>
              {teachSub.map((course, index) => (
                <li className={styles.course_list} key={index}>
                  {course}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.vertical_line}></div>
          <div className={styles.skills}>
            <h3 className={styles.heading}>Looking for</h3>
            <ul className={styles.courses}>
              {studySub.map((course, index) => (
                <li className={styles.course_list} key={index}>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
