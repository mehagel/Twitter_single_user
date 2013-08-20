get '/' do
  erb :index
end

post '/tweet' do

  Twitter.update(params[:tweet])

  erb :index
end

post '/username' do

  @twitter_user = TwitterUser.find_by_username(params[:username])
  
  if @twitter_user
    if @twitter_user.tweets.empty? || @twitter_user.tweets_stale?
      @twitter_user.fetch_tweets!
    else 
      @user_tweets = @twitter_user.tweets.map(&:text)
    end    

  else
    @twitter_user = TwitterUser.create(username: params[:username])
    @user_tweets = @twitter_user.fetch_tweets!.map(&:text)
  end

  @tweets = @twitter_user.tweets

  erb :_tweet_list, layout: false
end

