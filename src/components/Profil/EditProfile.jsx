import Image from "../../images/profile.png"
import Logo from "../../images/logo2.png"

export const EditProfile = () => {
    return(
        <>
            <div className="pt-24 pb-32 self-center">
                <div className="container flex mx-auto justify-center">
                    <div className="bg-[#F5FFFF] pt-[1rem] px-[1rem] pb-[2rem] rounded-lg shadow-xl">
                        <div className="w-full">
                            <div className="flex justify-center w-full mx-4">
                                <img src={Logo} alt="Logo" className="mb-8" />
                            </div>
                            <div className="flex justify-center">
                                <img src={Image} alt="Profile" className="max-h-[250px]" />
                            </div>
                            <div className="flex w-full mt-8 mx-4">
                                <div className="w-2/5 flex justify-between">
                                    <h4 className="text-lg font-semibold ">Username</h4>
                                    <h5 className="text-lg font-semibold text-right">:</h5>
                                </div>
                                <div className="w-3/5">
                                    <h4 className="text-lg font-semibold ml-2 truncate">usernameValue</h4>
                                </div>
                            </div>
                            <div className="flex w-full mt-4 mx-4 items-center">
                                <div className="w-2/5 flex justify-between">
                                    <label htmlFor="email" className="text-lg font-semibold ">Email</label>
                                    <h5 className="text-lg font-semibold text-right">:</h5>
                                </div>
                                <div className="w-3/5">
                                    <input type="email" className="text-lg px-2 py-1/2 rounded-xl w-full border-[0.47px] border-[#000] ml-2 max-w-[200px]" placeholder="emailValue" />
                                </div>
                            </div>
                            <div className="flex w-full mt-4 mx-4 items-center">
                                <div className="w-2/5 flex justify-between">
                                    <label htmlFor="password" className="text-lg font-semibold ">Password</label>
                                    <h5 className="text-lg font-semibold text-right">:</h5>
                                </div>
                                <div className="w-3/5">
                                    <input type="password" className="text-lg px-2 py-1/2 rounded-xl w-full border-[0.47px] border-[#000] ml-2 max-w-[200px]" />
                                </div>
                            </div>
                            <div className="flex w-full mt-4 mx-4 items-center">
                                <div className="w-2/5 flex justify-between">
                                    <label htmlFor="vpassword" className="text-lg font-semibold ">Re-Password</label>
                                    <h5 className="text-lg font-semibold text-right">:</h5>
                                </div>
                                <div className="w-3/5">
                                    <input type="password" className="text-lg px-2 py-1/2 rounded-xl w-full border-[0.47px] border-[#000] ml-2 max-w-[200px]" />
                                </div>
                            </div>
                            <div className="w-full flex justify-end mt-8">
                                <button className="mx-4 py-2 px-6 bg-[#01A29D] text-lg font-semibold text-[#FFFFFF] rounded-xl">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}