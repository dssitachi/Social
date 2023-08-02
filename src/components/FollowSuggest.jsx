

function FollowSuggest() {
    return (
        <section className="p-4 m-2 w-full mt-16 fixed">
            <h3 className="font-semibold text-2xl">Who to follow</h3>
            <ul>
                <li className="mt-4">
                    <div className="w-full flex justify-between max-w-xs items-center">
                        <div className="flex gap-2">
                            <div>
                                <img src="https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg" alt="Post Image" className="w-10 h-10 border rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold"> Lucas Parker  </span>
                                <span className="text-sm text-gray-400"> @LParker22 </span>
                            </div>
                        </div>
                        <button className="bg-black text-white font-semibold text-sm rounded-full px-4 py-2">Follow</button>
                    </div>
                </li>

                <li className="mt-4">
                    <div className="w-full flex justify-between max-w-xs items-center">
                        <div className="flex gap-2">
                            <div>
                                <img src="https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg" alt="Post Image" className="w-10 h-10 border rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold"> Lucas Parker  </span>
                                <span className="text-sm text-gray-400"> @LParker22 </span>
                            </div>
                        </div>
                        <button className="bg-black text-white font-semibold text-sm rounded-full px-4 py-2">Follow</button>
                    </div>
                </li>

                <li className="mt-4">
                    <div className="w-full flex justify-between max-w-xs items-center">
                        <div className="flex gap-2">
                            <div>
                                <img src="https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg" alt="Post Image" className="w-10 h-10 border rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold"> Lucas Parker  </span>
                                <span className="text-sm  text-gray-400"> @LParker22 </span>
                            </div>
                        </div>
                        <button className="bg-black text-white font-semibold text-sm rounded-full px-4 py-2">Follow</button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default FollowSuggest