import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

import { FaRegEye } from 'react-icons/fa'
import { FaRegThumbsUp } from 'react-icons/fa'
import { BiCommentDetail } from 'react-icons/bi'


const Video = () => {
    const { videoId } = useParams();
    const [ videoDetail, setVideoDetail ] = useState(null);
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
                console.log(data);
            });

        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
            .then((data) => {
                setComments(data.items);
                console.log(data);
            });
    }, [videoId]);

    return (
        <section id='videoViewPage'>
            {videoDetail && (
                <div className='video__view'>
                    <div className='video__play'>
                        <ReactPlayer 
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width='100%'
                            height='100%'
                            style={{position: 'absolute', top: 0, left: 0}}
                        />
                    </div>
                    <div className='video__info'>
                        <h2 className='video__title'>
                            {videoDetail.snippet.title}
                        </h2>
                        <div className='video__channel'>
                            <div className='id'>
                                <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link></div>
                            <div className='count'>
                                <span className='view'><FaRegEye />{videoDetail.statistics.viewCount}</span>
                                <span className='like'><FaRegThumbsUp />{videoDetail.statistics.likeCount}</span>
                                <span className='comment'><BiCommentDetail />{videoDetail.statistics.commentCount}</span>
                            </div>
                        </div>
                    </div>
                    <p className='desc'>
                        {videoDetail.snippet.description}
                    </p>
                    <div className='info'>
                        <Link to={`/channel/${videoDetail.snippet.channelId}`} className='author'>{videoDetail.snippet.channelTitle}</Link>
                    </div>
                    <div className='comments'>
                        {comments.map((comment, key) => (
                            <div className="comment__all" key={key}>
                                <div className="comment__nickname">
                                    {comment.snippet.topLevelComment.snippet.authorDisplayName}
                                </div>
                                <div className="comment__cont">
                                    {comment.snippet.topLevelComment.snippet.textOriginal}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Video