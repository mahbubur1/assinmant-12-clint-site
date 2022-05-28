import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { BiEdit } from "react-icons/bi";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import { toast } from "react-toastify";
import EditeModal from "./EditeModal";
import avater from "../../../Assests/avater.png";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [modalClose, setModalClose] = useState("");

  const {
    data: profile,
    isLoading,
    error,
    refetch,
  } = useQuery("porfile", () =>
    fetch(`https://fast-fjord-25357.herokuapp.com/user/${user?.email}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error.massage);
  }

  return (
    <>
      <h3 className="text-2xl text-center font-bold my-4">
        <span className=" border-b-2 border-primary">Profile</span>
      </h3>
      <div className="flex justify-center items-center my-10">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src={user?.photoURL ? user?.photoURL : avater} alt="" />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{user?.displayName}</h2>
            <h2 class="card-title">{user?.email}</h2>
          </div>
          <div className="m-6 font-bold">
            <p>
              Education:{" "}
              {profile?.education
                ? profile?.education
                : "you not set any education yet."}
            </p>
            <p>
              Location:{" "}
              {profile?.location
                ? profile?.location
                : "you not set any location yet."}
            </p>
            <p>
              Phone:{" "}
              {profile?.phone
                ? profile?.phone
                : "you not set any Phone number yet."}
            </p>
            <p>
              Linkedin:{" "}
              {profile?.linkedin
                ? profile?.linkedin
                : "you not set education yet."}
            </p>
          </div>
          <label
            for="edit-modal"
            disabled={!profile}
            onClick={() => setModalClose("open")}
            class="btn btn-xs btn-primary"
          >
            <BiEdit className="text-lg mr-2" /> Update Profile
          </label>
        </div>
        {modalClose && (
          <EditeModal
            profile={profile}
            refetch={refetch}
            setModalClose={setModalClose}
          ></EditeModal>
        )}
      </div>
    </>
  );
};

export default Profile;
