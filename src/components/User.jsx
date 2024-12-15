import { useState, useEffect } from "react";
import { client } from "../utils/fetchClient";
import SkeletonPofile from "../skeletons/SkeletonProfile/SkeletonPofile";

export default function User() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await client.get("/users/1"); // Replace with your API endpoint
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);

  return (
    <section className="user">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonPofile theme="light" />}
    </section>
  );
}
