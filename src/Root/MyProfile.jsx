import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Profile updated successfully!");
      document.getElementById("update_modal").close();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-base-content items-center justify-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Welcome,{" "}
        <span className="text-info">{user?.displayName || "User"}</span>!
      </h1>

      <div className="card w-full max-w-md bg-base-100 shadow-md border border-base-300">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold">
            {user?.displayName}
          </h2>
          <p className="mb-4">{user?.email}</p>
          <div className="card-actions w-full">
            <button
              onClick={() =>
                document.getElementById("update_modal").showModal()
              }
              className="btn bg-base-300 w-full"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* modal starts */}
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update Your Information</h3>

          <form onSubmit={handleUpdate}>
            <div className="form-control mb-2">
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                className="input input-bordered"
                required
              />
            </div>

            <div className="modal-action">
              <button
                type="submit"
                className="btn bg-teal-600"
                disabled={loading}
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("update_modal").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
      {/* modal ends */}
    </div>
  );
};

export default MyProfile;
