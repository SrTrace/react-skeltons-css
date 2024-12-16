import { useState, useEffect } from "react";
import { client } from "../utils/fetchClient";
import SkeletonPofile from "../skeletons/SkeletonProfile/SkeletonPofile";
import { useTheme } from "../hooks/useTheme";

export default function User() {
  const [profile, setProfile] = useState(null);
  const { theme } = useTheme();

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
      <h2 className="title is-2 has-text-black">User Details</h2>

      {profile && (
        <div className="profile">
          <h3 className="title is-3 has-text-black">{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonPofile theme={theme} />}
    </section>
  );
}
